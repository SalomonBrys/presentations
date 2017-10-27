/*
This shows how to use a bad API that you cannot change with coroutines.
*/

package coroutines.meetup.coroutinesdemo

import kotlinx.coroutines.experimental.channels.Channel
import kotlinx.coroutines.experimental.runBlocking
import kotlin.concurrent.thread

/**
 * This shows an API that uses the callback (bad) pattern.
 */
object FakeBadAPI {

    fun login(username: String, password: String, cb: (String) -> Unit) =
            thread {
                Thread.sleep(1500)
                cb("Fake-Token")
            }

    fun getName(token: String, cb: (String) -> Unit) =
            thread {
                Thread.sleep(1500)
                cb("John Doe")
            }

}



/**
 * Transforms the bad login function into a coroutine suspension function using a Channel.
 */
suspend fun FakeBadAPI.login(username: String, password: String): String {
    val channel = Channel<String>()
    login(username, password) { token -> runBlocking { channel.send(token) } }
    return channel.receive()
}

/**
 * Same with getName.
 */
suspend fun FakeBadAPI.getName(token: String): String {
    val channel = Channel<String>()
    getName(token) { name -> runBlocking { channel.send(name) } }
    return channel.receive()
}





