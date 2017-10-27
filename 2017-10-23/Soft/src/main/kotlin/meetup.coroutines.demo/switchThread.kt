/*
Children, PLEASE DO NOT REPRODUCE AT HOME!
Shows how you can start a coroutine in a thread, and resume it in another.
*/

package meetup.coroutines.demo

import kotlin.concurrent.thread
import kotlin.coroutines.experimental.*

suspend fun switchInNewThread() = suspendCoroutine<Unit> { c ->
    thread {
        c.resume(Unit)
    }
}

fun runInMultipleThreads(f: suspend () -> Unit) {
    f.startCoroutine(object: Continuation<Unit> {
        override val context get() = EmptyCoroutineContext
        override fun resume(value: Unit) {}
        override fun resumeWithException(ex: Throwable) { throw ex }
    })
}
