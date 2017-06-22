

inline fun <reified T> classOf(): Class<T> { return T::class.java }

fun ex_2_1() {

    val cls = classOf<String>() // String::class.java

}




inline fun <reified T> ifIs(obj: Any): T? {
    return if (obj is T)
        obj
    else
        null
}

fun ex_2_2() {

    val obj: Any = "Hello, World"
    val str = ifIs<String>(obj) // obj as? String

}
