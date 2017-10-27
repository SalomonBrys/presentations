package coroutines.meetup.coroutinesdemo

import android.app.Activity
import android.os.Bundle
import android.view.View
import io.reactivex.android.schedulers.AndroidSchedulers
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.experimental.android.UI
import kotlinx.coroutines.experimental.launch
import kotlinx.coroutines.experimental.rx2.await

/**
 * A simple activity that:
 * - Shows a progress bar
 * - Calls FakeAPI.login in the background and receives a token
 * - Calls FakeAPI.getName with the token in the background and receives the name
 * - Dispays the name and hides the progressbar
 */
class MainActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textView.visibility = View.GONE





/*
This is the "naive" RxJava implementation, without coroutine.
It is easily understandable, but dives into the "callback hell".
*/

//        FakeAPI.login("admin", "password").subscribe { token ->
//            FakeAPI.getName(token).subscribe { name ->
//                runOnUiThread {
//                    textView.text = name
//                    textView.visibility = View.VISIBLE
//                    progressBar.visibility = View.GONE
//                }
//            }
//        }





/*
This is the "expert" RxJava implementation, without coroutines.
It eludes callback hell, but needs a RxJava master to read/understand it.
*/

//        FakeAPI.login("admin", "password")
//                .flatMap { token -> FakeAPI.getName(token) }
//                .observeOn(AndroidSchedulers.mainThread())
//                .subscribe { name ->
//                    textView.text = name
//                    textView.visibility = View.VISIBLE
//                    progressBar.visibility = View.GONE
//                }





/*
This demonstrates many things:
  - The use of `launch(UI)` that runs a coroutines whose code will always run in the UI thread.
    It can of course be suspended, but when it resumes, it will be in the main thread.
  - The use of the `await` extension function that suspends the coroutine on an RxJava type (here, a `Single`), until the value is received.
  - How readable and awesome coroutines are!
*/

//        launch(UI) {
//            val token = FakeAPI.login("admin", "password").await()
//            val name = FakeAPI.getName(token).await()
//
//            textView.text = name
//            textView.visibility = View.VISIBLE
//            progressBar.visibility = View.GONE
//        }





/*
This shows how callback hell happens in a bad API.
*/

//        FakeBadAPI.login("admin", "password") { token ->
//            FakeBadAPI.getName(token) { name ->
//                runOnUiThread {
//                    textView.text = name
//                    textView.visibility = View.VISIBLE
//                    progressBar.visibility = View.GONE
//                }
//            }
//        }





/*
This shows how to use extension functions defined to "translate" a bad API into a coroutines API.
Note that the `login` and `getName` functions are themselves suspension functions.
*/

//        launch(UI) {
//            val token = FakeBadAPI.login("admin", "password")
//            val name = FakeBadAPI.getName(token)
//
//            textView.text = name
//            textView.visibility = View.VISIBLE
//            progressBar.visibility = View.GONE
//        }





/*
Coroutines are freakin' awesome!
*/

//        launch(UI) {
//            textView.text = FakeBadAPI.getName(FakeBadAPI.login("admin", "password"))
//            textView.visibility = View.VISIBLE
//            progressBar.visibility = View.GONE
//        }

    }
}
