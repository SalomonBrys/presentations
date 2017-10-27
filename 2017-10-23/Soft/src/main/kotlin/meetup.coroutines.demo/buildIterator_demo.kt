/*
This file shows a simple way to create an iterable with a coroutine.
Note that this code should never run in production! Use the real buildIterable or buildSequence functions from the Kotlin stdlib!
*/

package meetup.coroutines.demo

import kotlin.coroutines.experimental.*

class Builder : Iterator<Int>, Continuation<Unit> {

    private var moved = false
    private var hasNext = false
    private var next = 0

    internal var continuation: Continuation<Unit>? = null

    // Called when the coroutine ENDS
    override fun resume(value: Unit) {
        moved = true
        hasNext = false
    }

    // Called when the coroutine THROWS AN EXCEPTION
    override fun resumeWithException(exception: Throwable) {
        throw exception
    }

    // No particular configuration
    override val context: CoroutineContext get() = EmptyCoroutineContext

    // Check if the iterable has moved (which means that it has pre-loaded the next value), if it has not move before returning.
    override fun hasNext(): Boolean {
        if (!moved)
            move()
        return hasNext
    }

    // Same logic than hasNext :)
    override fun next(): Int {
        if (!moved)
            move()
        if (!hasNext)
            throw NoSuchElementException()
        moved = false
        return next
    }

    // Resumes the coroutine and wait for it to be suspended by the `yield` function
    private fun move() {
        val continuation = continuation ?: throw IllegalStateException()
        continuation.resume(Unit)
        moved = true
    }

    // Called by the coroutine: suspend it and set the value to be returned by `next`.
    suspend fun yield(value: Int) {
        hasNext = true
        next = value
        return suspendCoroutine { c ->
            continuation = c
        }
    }
}

// Note that this function creates a coroutine but do not start it.
// It will be started by the first call to `next` or `hasNext` on the returned iterator.
fun buildIterator_demo(buildFunction: suspend Builder.() -> Unit): Iterator<Int> {

    val builder = Builder()

    builder.continuation = buildFunction.createCoroutine(builder, builder)

    return builder
}
