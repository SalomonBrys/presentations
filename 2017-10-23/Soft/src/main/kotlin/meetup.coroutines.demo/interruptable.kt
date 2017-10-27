/*
A simple demonstration of Kotlin's coroutine intrinsics.
*/

package meetup.coroutines.demo

import kotlin.coroutines.experimental.Continuation
import kotlin.coroutines.experimental.EmptyCoroutineContext
import kotlin.coroutines.experimental.startCoroutine
import kotlin.coroutines.experimental.suspendCoroutine

class Interruptable<T>: (T) -> Unit {
    private lateinit var continuation: Continuation<T>

    /**
     * Called by the coroutine: suspend it.
     */
    suspend fun interrupt(): T {
        return suspendCoroutine { c ->
            continuation = c
        }
    }

    /**
     * Resume the suspended coroutine.
     */
    override fun invoke(value: T) {
        continuation.resume(value)
    }
}

operator fun <R> ((Unit) -> R).invoke() = invoke(Unit)

/**
 * Creates a coroutine that can be suspended, and returns a function to resume it.
 */
fun <T> interruptable(f: suspend Interruptable<T>.() -> Unit): (T) -> Unit {
    val interruptable = Interruptable<T>()

    f.startCoroutine(interruptable, object: Continuation<Unit> {
        override val context get() = EmptyCoroutineContext
        override fun resume(value: Unit) {}
        override fun resumeWithException(exception: Throwable) { throw exception }
    })

    return interruptable
}
