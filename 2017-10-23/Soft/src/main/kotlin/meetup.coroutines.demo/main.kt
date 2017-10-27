package meetup.coroutines.demo

import kotlinx.coroutines.experimental.*
import java.util.concurrent.atomic.AtomicInteger
import kotlin.concurrent.thread
import kotlin.coroutines.experimental.buildIterator
import kotlin.system.measureTimeMillis

fun main(args: Array<String>) {

/*
This example shows that, in its core, the only thing that a coroutine allows is to suspend the execution of a function by calling a suspension function.
Here, the `interruptable` function takes a "suspendable lambda" which runs in a context that provides the `interrupt` function that, well, interrupts the execution of the lambda.
The `interruptable` function also returns a function that can be called to resume the lambda after it has been interrupted.
Note that there are no threading here, everything happens in the same thread, and the thread is never idly blocked.
*/

//    val run = interruptable<Unit> {
//        println("Before interrupt")
//        interrupt()
//        println("After interrupt")
//    }
//    println("Before run")
//    run()
//    println("After run")





/*
This example is exactly the same as the previous one, except that it demonstrates that a suspension function is an opportunity to get a value from the context during suspension.
Here, the lambda runs, suspends, and get the value 42 from the main code that resumed it. It essentialy "resumed the coroutine with a value".
 */

//    val run = interruptable<Int> {
//        println("Before interrupt")
//        val value = interrupt()
//        println("After interrupt: $value")
//    }
//    println("Before run")
//    run(42)
//    println("After run")





/*
This example shows that it is possible to generate values of an iterator by suspending and yielding the value.
In this `buildIterator_demo` lambda, every time the `yield` function is called, the execution is suspended until the iterator needs the next value.
It also demonstrates that creating coroutines from scratch is kind of complicated, even for a simple task : have a look at the buildIterator_demo.kt file.
Note that this function is not even safe : there are multiple ways this could go wrong, which is why the stdlib provides the `buildIterator` function. Have look at its source code ;)

Also: have a look at the JavaIteratorBuilder file that demonstrates how a coroutine is compiled in bytecode.
*/

//    val iterator = buildIterator {
//        for (i in 0..9)
//            if (i % 2 == 0) {
//                println("Yielding $i")
//                yield(i)
//                println("Continuing after $i")
//            }
//
//        for (i in 0..9)
//            if (i % 2 == 1) {
//                println("Yielding $i")
//                yield(i)
//                println("Continuing after $i")
//            }
//    }
//
//    for (i in iterator)
//        println("Got $i")





/*
This code shows, once again, that a coroutine is only a function that can be suspended and then resumed.
Becaus of that, it is entirely possible to create a coroutine that starts in the main thread, suspend, and then resume in a different thread.
Note that there is very little reasons why you would want to do that, and that it may created lots of weird thread safety issues. Also, a kitten might die.
 */

//    runInMultipleThreads {
//        println("Before switching: " + Thread.currentThread().name)
//        switchInNewThread()
//        Thread.sleep(500)
//        println("After switching: " + Thread.currentThread().name)
//    }
//    println("Hello, world!")





/*
This example demonstrated 2 things:
  - How to properly use coroutines : through the use of the kotlinx library. Unless you know precisely what you are doing, you should not use coroutines intrinsics.
    The kotlinx.coroutine library provides very simple way to use coroutine in a safe and correct manner.
    We demonstrate the use of the `launch` function. It starts a coroutine in a "coroutine context".
    Here, the context is `CommonPool`, which will run coroutines in a background thread (there will be no more thread than there are cores in your proc).
    Note that the launch function ensures that all the code will be run in the same thread, which means that a coroutine cannot change thread after a suspension.
    In this example, the suspension function is the `delay` function, which suspends the coroutine for the given amount of milliseconds.
  - The fact that coroutines are a looooot more lightweight than threads are.
    You can put the `COUNT` value to 100_000 and see the VM die under the number of threads, than comment the thread code and see coroutines work as expected ;)
*/

//    val COUNT = 10_000
//
//    val counter = AtomicInteger(0)
//
//    counter.set(0)
//    val timeThreads = measureTimeMillis {
//        val threads = ArrayList<Thread>(COUNT)
//        for (i in 0 until COUNT)
//            threads += thread {
//                Thread.sleep(1000)
//                counter.incrementAndGet()
//            }
//        threads.forEach { it.join() }
//        println(counter.get())
//    }
//    println("Took $timeThreads ms")
//
//    counter.set(0)
//    val timeCoroutines = measureTimeMillis {
//        val jobs = ArrayList<Job>(COUNT)
//        for (i in 0 until COUNT)
//            jobs += launch(CommonPool) {
//                delay(1000)
//                counter.incrementAndGet()
//            }
//
//        runBlocking {
//            jobs.forEach { it.join() }
//            println(counter.get())
//        }
//    }
//    println("Took $timeCoroutines ms")

}
