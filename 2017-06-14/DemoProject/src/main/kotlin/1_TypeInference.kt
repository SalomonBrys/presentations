import io.reactivex.subjects.PublishSubject
import io.reactivex.subjects.Subject

fun ex_1() {

    val subject1: Subject<String> = PublishSubject.create()

    val subject2 = PublishSubject.create<String>()



    val list1: List<String> = ArrayList()

    val list2 = arrayListOf("one", "two", "three")



    val lambda1: (Int) -> Int = { i -> i * i }

    val lambda2 = { i: Int -> i * i }



    fun <T> insert(value: T, into: MutableList<T>) : List<T> {
        into.add(value)
        return into
    }

    val list = insert("Hello, World!", ArrayList())

}
