package coroutines.meetup.coroutinesdemo

import io.reactivex.Single
import io.reactivex.schedulers.Schedulers

/**
 * This emulates an API that could have been defined with retrofit with the RxJava2 adapter.
 */
object FakeAPI {

    fun login(username: String, password: String): Single<String> =
            Single
                    .fromCallable<String> {
                        Thread.sleep(1500)
                        "Fake-Token"
                    }
                    .subscribeOn(Schedulers.io())

    fun getName(token: String): Single<String> =
            Single
                    .fromCallable<String> {
                        Thread.sleep(1500)
                        "John Doe"
                    }
                    .subscribeOn(Schedulers.io())

}
