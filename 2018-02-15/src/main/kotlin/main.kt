import com.github.salomonbrys.revealkt.*
import kotlinx.html.TagConsumer
import kotlinx.html.dom.append
import kotlinx.html.js.*
import kotlinx.html.style
import org.w3c.dom.HTMLElement
import kotlin.browser.document

fun TagConsumer<HTMLElement>.fadeInAppear(index: Int = -1) = fragment("fade-in-appear", index)

fun TagConsumer<HTMLElement>.fadeOutDisappear(index: Int = -1) = fragment("fade-out-disappear", index)

fun TagConsumer<HTMLElement>.replace(index: Int, from: String, to: String) {
    fadeInAppear(index).span { +to}
    fadeOutDisappear(index).span { +from }
}

fun TagConsumer<HTMLElement>.stamp(index: Int = -1) = fragment("stamp", index)



fun AnimText.fInA(index: Int, text: String) = fragment(index, "fade-in-appear current-blue", text)

fun AnimText.fInB(index: Int, text: String) = fragment(index, "current-blue", text)

fun AnimText.fOutD(index: Int, text: String) = fragment(index, "fade-out-disappear", text)

fun AnimText.replace(index: Int, from: String, to: String) = fInA(index, to) + fOutD(index, from)

fun AnimText.curB(index: Int, text: String) = fragment(index, "current-visible current-blue", text)

fun AnimText.error(text: String) = span("error", text)

fun AnimText.warning(text: String) = span("warning", text)



fun main(args: Array<String>) {

    document.body!!.append {
        revealSlides {
            section {
                slide {
                    h2 { +"Be In," ; br() ; +"Learn Kotlin!" }
                }
                slide {
                    img(src = "imgs/Avatar.jpg") {
                        style = "width: 20%; border-radius: 100%; box-shadow: 3px 3px 20px #555;"
                    }
                    br()
                    +"Salomon BRYS"
                    br()
                    a(href = "https://github.com/salomonbrys") { +"github.com/salomonbrys" }
                    br()
                    a(href = "https://twitter.com/salomonbrys") { +"@salomonbrys" }

                }
            }

            slide {
                h2 { +"Goals of this talk" }
                ul {
                    fadeUp().li {
                        +"NOT a tutorial"
                        fadeIn().span {
                            +": " ; a(href = "https://kotlinlang.org") { +"kotlinlang.org" }
                        }
                    }
                    fadeUp().li {
                        +"NOT a language course"
                        fadeIn().span {
                            +": " ; a(href = "https://github.com/Kotlin/kotlin-koans") { +"Kotlin koans" }
                        }
                    }
                    fadeUp().li {
                        +"Introduction"
                        fadeIn().span {
                            +": "
                            b(classes = "flicker") {
                                style = "color: red"
                                +"Wow effect!"
                            }
                        }
                    }
                }
            }

            section {
                slide {
                    h2 { +"Why Kotlin?" }
                }

                slide {
                    lazyImg(src = "imgs/loc.png")
                }

                slide {
                    h2 { +"Kotlin is..." }

                    ul {
                        fadeUp().li {
                            +"Built BY Industry"
                            fadeIn().span { +": Jetbrains" }
                        }
                        fadeUp().li {
                            +"Built FOR Industry"
                            fadeIn().span { +": no weird stuff" }
                        }
                        fadeUp().li { +"Complete Java interop" }
                        fadeUp().li { +"Very easy" }
                    }
                }
            }

            section {
                slide {
                    h2 { +"Types" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                ${hl(1, "fun")} <T: Any> connect(uriStr${hl(2, ": String")})${hl(2, ": Connection")} {
                                    val uri${fOutD(4, hl(2, ": URI"))} = ${hl(3, "URI(uriStr)")}
                                }
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Nullability" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                fun connect(uriStr: String${hl(1, "?")}${fInA(4, " = null")} {
                                    ${fInB(2, "val uriStr = uriStr ${hl(3, "?:")} DEFAULT_URI")}
                                    val uri = URI(uriStr)
                                                  ${cur(1, error("^^^^^^"))}
                                }
                            """
                        }
                    }

                    fadeIn().i { +"Nullability is " ; b { +"part of the type" } ; +"!" }

                    stamp().b {
                        style = "position: absolute; color: red; left: 0px; top: 26%; font-size: 210%;"
                        span {
                            style = "display: inline-block; transform: rotate(-15deg)"
                            +"Million dollar mistake\nFIXED!"
                        }
                    }
                }
            }

            section {
                slide {
                    h2 { +"Java interop" }
                    replace(1, "Wight", "List")
                    +" is "
                    replace(1, "Wight", "List")
                    br()
                    replace(1, "Dylan", "Map")
                    +" is "
                    replace(1, "Dylan", "Map")
                }

                slide {
                    h2 { +"Nullability: K -> J" }

                    small("fileName") { +"Foo.kt:" }
                    hlCode("kotlin") {
                        +"fun bar(str: String) {}"
                    }

                    small("fileName") { +"Test.java:" }
                    hlCode("java") {
                        +animText { """
                            ${hl(1, "FooKt")}.bar(null);
                                      ${fIn(2, warning("^^^^"))}
                        """ }
                    }

                    fragment().i { +"Nullability can only be " ; b { +"enforced" } ; +" in Kotlin code." }
                }

                slide {
                    h2 { +"Nullability: J -> K" }

                    small("fileName") { +"System.java:" }
                    hlCode("java") {
                        +"static String platform() { return \"Whatever\"; }"
                    }

                    small("fileName") { +"test.kt:" }
                    hlCode("kotlin") {
                        +animText { """
                            val pn${fInA(2, ": String")} = System.platform() ${fIn(1, "// ctrl+shift+P -> String${fOutD(2, "!")}")}
                        """ }
                    }

                    fragment().i { +"Kotlin is " ; b { +"permissive" } ; +" when using java code." }
                    br()
                    fragment().i { +"Remember " ; b { +"ctrl+shift+P" } ; +"!!!" }
                }
            }

            section {
                slide {
                    h2 { +"Properties" }

                    hlCode("kotlin") {
                        style = "font-size: 85%; line-height: 1.2em; max-height: 500px;"

                        +animText {
                            """
                                ${fInA(7, "data")} class User${hl(1, "(${fInA(6, "var ")}firstName: String, ${fInA(6, "var ")}lastName: String)")} ${fOut(8, "{")}
                                    ${fOut(6, """${fOutD(3, "private ")}var firstName ${fInB(2, "= firstName")}
                                    ${fOutD(3, "private ")}var lastName ${fInB(2, "= lastName")}""")}
                                        ${curB(4, """get() = field
                                        set(value) { field = value }""")}

                                    ${fOut(2, hl(1, """init {
                                        this.firstName = firstName
                                        this.lastName = lastName
                                    }"""))}

                                    ${fOut(3, """fun getFirstName() = firstName
                                    fun setFirstName(firstName: String) { this.firstName = firstName }

                                    fun getLastName() = lastName
                                    fun setLastName() { this.lastName = lastName }""")}

                                    ${fOut(7, """fun toString() = "User{firstName=${"\$firstName"}, lastName=${"\$lastName"}}"

                                    fun hashcode() = firstName.hashCode() * lastName.hashCode()""")}
                                ${fOut(8, "}")}
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Properties" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                class MainView {
                                    val login ${hl(1, "by")} fromLayout(EditText::class)
                                }

                                ${fIn(2, "fun <T${hl(3, ": View")}> fromLayout(cls: KClass<T>): ${hl(4, "ReadOnlyProperty<T>")}")}
                            """
                        }
                    }

                    fragment().i { +"Delegated properties are used for " ; b { +"lazy retrieval" } ; +" and for " ; b { +"injection" } ; +"." }
                }
            }

            section {
                slide {
                    h2 { +"Fonctions" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                fun ${fInA(2, "Connection.")}updateUser(${fOutD(2, "${hl(1, "con: Connection")}, ")}user: User)

                                ${fInA(2, "con.")}updateUser(${fOutD(2, "${hl(1, "con")}, ")}user)


                                ${fIn(3, """fun <T> ${fInA(4, "Map<String, T>.")}prefixed(${fOutD(4, "map: Map<String, T>, ")}prefix: String): List<T>

                                val entries = ${fInA(4, "map.")}prefixed(${fOutD(4, "map, ")}"_")""")}
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Lambdas" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                list.map${fOutD(4, "(${fInA(3, ")")}")}${fInA(3, " ")}${hl(1, "{ ${replace(2, "element -> element", "it")}.toString() }")}${fOutD(3, ")")} ${fInA(5, ".reduce { acc, v -> acc + v }")}
                            """
                        }
                    }
                }

                slide {
                    h2 { +"DSL" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                data class AlbumToPlay(val name: String)

                                ${hl(1, "object")} play {
                                    ${fInA(2, "infix ")}fun album(name: String) = AlbumToPlay(name)
                                }

                                ${fInA(2, "infix ")}fun AlbumToPlay.by(band: String) {}


                                play${fOut(3, ".")}album${fOut(3, "(")}"Pacifisticuffs"${fOut(3, ")")}${fOutD(3, ".")}by${fOut(3, "(")}"Diablo Swing Orchestra"${fOut(3, ")")}
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Operator" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                object db {
                                    ${fInA(1, "operator ")}fun get(str: String): Entry {}
                                    ${fInA(1, "operator ")}fun set(str: String, value: String) {}
                                }

                                val entry = db${replace(2, ".get(", "[")}"key"${replace(2, ")", "]")}
                                db${replace(2, ".put(", "[")}key${replace(2, ", ", "] = ")}value${fOutD(2, ")")}


                                ${fIn(3, "operator fun Date.plus(other: Date): Date {}")}
                            """
                        }
                    }
                }
            }

            section {
                slide {
                    h2 { +"Inline" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                ${fInA(3, "inline ")}fun <T> Iterable<T>.forEach(action: ${hl(1, "(T) -> Unit")}) {
                                    for (element in this)
                                        action(element)
                                }

                                                                 ${fIn(4, "//Compiled as:")}
                                ${fIn(2, "list.forEach {")}                   ${fIn(4, "for (element in list) {")}
                                    ${fIn(2, "println(it.toString())")}           ${fIn(4, "println(element.toString())")}
                                ${fIn(2, "}")}                                ${fIn(4, "}")}
                            """
                        }
                    }

                    fragment().i { +"Inlining is " ; b { +"forced" } ; +"!" }
                }

                slide {
                    h2 { +"Non-local return" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                ${hl(1, "fun")} <T> Iterable<T>.first(predicate: (T) -> Boolean): T {
                                    this.forEach {
                                        if (predicate(it))
                                            ${hl(1, "return")}${fInA(2, fOutD(3, "@forEach"))} it
                                    }
                                    throw NoSuchElementException()
                                }
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Reified types" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                ${fInA(3, "inline ")}fun <${fInA(3, "reified ")}T${fInA(3, ": Any ")}> typeName() = T::class.simpleName
                                                      ${cur(2, error("^^^^^^^"))}
                                                          ${fIn(4, "//Compiled as:")}
                                ${fIn(1, "typeName<String>()")}        ${fIn(4, "String::class.simpleName()")}
                                         ${cur(2, error("^^^^^^"))}


                                ${fIn(5, "${fInA(6, "inline ")}fun <${fInA(6, "reified ")}${hl(8, "T: View")}> fromLayout(${fOutD(6, "cls: KClass<T>")}): ReadOnlyProperty<${hl(8, "T")}>")}

                                ${fIn(7, "val login${fInA(8, ": EditText")} by fromLayout${fOutD(8, "<EditText>")}()")}
                            """
                        }
                    }
                }
            }

            section {
                slide {
                    h2 { +"Let's Rx..." }

                    hlCode("kotlin") {
                        +animText {
                            """
                                class Article(val text: String)

                                fun getFromDB(id: Int): Maybe<Article> ${hl(1, "= TODO()")}

                                fun request(id: Int): Single<Article> ${hl(1, "= TODO()")}

                                fun backupInDB(article: Article): Completable ${hl(1, "= TODO()")}
                            """
                        }
                    }

                    br()

                    fragment().hlCode("text") {
                        style = "font-size: 85%; line-height: 1.2em; background-color: white"
                        +"""
                            getArticleText(articleId) =
                                if article is in local DB
                                    return article text from local DB
                                else
                                    download article
                                    save downloaded article in local DB
                                    return downloaded article text
                        """
                    }
                }

                slide {
                    h2 { +"Using callbacks" }

                    hlCode("kotlin") {
                        style = "font-size: 85%; line-height: 1.2em; background-color: white"
                        +animText {
                            """
                                fun getArticleText(id: Int): Single<String> {
                                    return ${hl(1, """Single.create { emitter ->
                                        ${hl(2, """getFromDB(id).subscribeBy(
                                                ${hl(3, """onSuccess = { article ->
                                                    ${hl(4, "emitter.onSuccess(article.text)")}
                                                }""")},
                                                ${hl(5, """onComplete = {
                                                    ${hl(6, """request(id).subscribe { article ->
                                                        ${hl(7, """backupInDB(article).subscribe {
                                                            ${hl(8, "emitter.onSuccess(article.text)")}
                                                        }""")}
                                                    }""")}
                                                }""")}
                                        )""")}
                                    }""")}
                                }
                            """
                        }
                    }

                    stamp(9).b {
                        style = "position: absolute; color: red; left: 15%; top: 45%; font-size: 210%;"
                        span {
                            style = "display: inline-block; transform: rotate(-15deg)"
                            +"Callback Hell!"
                        }
                    }
                }

                slide {
                    h2 { +"Using composition" }

                    hlCode("kotlin") {
                        style = "font-size: 85%; line-height: 1.2em; background-color: white; max-height: 500px;"
                        +animText {
                            """
                                fun getArticleText(id: Int): Single<String> {
                                  return ${hl(1, "getFromDB(id)")}
                                          ${hl(2, ".map { it.text }")}
                                          ${hl(3, ".defaultIfEmpty(\"\")")}
                                          ${hl(3, ".toSingle()")}
                                          ${hl(4, """.flatMap { txt ->code
                                              ${hl(5, """if (txt.isNotEmpty())
                                                  ${hl(6, "Single.just(txt)")}""")}
                                              ${hl(7, """else
                                                  ${hl(8, "request(id)")}
                                                          ${hl(9, """.flatMap {
                                                              ${hl(10, "backupInDB(it)")}
                                                              ${hl(11, ".toSingleDefault(it)")}
                                                          }""".trimMargin())}
                                                          ${hl(12, ".map { it.text }")}""")}
                                              }
                                          """)}
                                }
                            """
                        }
                    }

                    stamp(13).b {
                        style = "position: absolute; color: red; left: 10%; top: 45%; font-size: 210%;"
                        span {
                            style = "display: inline-block; transform: rotate(-15deg)"
                            +"Composition Hell!"
                        }
                    }

                }

                slide {
                    h2 { +"Using coroutines!" }

                    hlCode("kotlin") {
                        style = "font-size: 85%; line-height: 1.2em; background-color: white"
                        +animText {
                            """
                                fun getArticleText(id: Int): Single<String> {
                                    return rxSingle {
                                        val article = ${hl(2, "getFromDB(id)${hl(1, ".await()")}")}
                                                ${hl(3, "?: ${hl(4, "request(id)${hl(1, ".await()")}")}${hl(5, ".also { backupInDB(it)${hl(1, ".await()")} }")}")}
                                        ${hl(6, "article.text")}
                                    }
                                }
                            """
                        }
                    }

                    stamp().h3 {
                        style = "font-weight: bold; color: red;"
                        span("flicker") {
                            +"That is AWESOME!"
                        }
                    }

                    fadeIn().p { +"...but NOT magic!" }
                }

                slide {
                    h2 { +"Coroutines..." }

                    ul {
                        fadeUp().li { +"... transform " ; b { +"sequential" } ; +" code into " ; b { +"callbacks" } ; +"." }
                        fadeUp().li { +"... are a compiler trick, not runtime magic." }
                        fadeUp().li { +"... are available through low level primitives." }
                        fadeUp().li {
                            +"... libraries are available for a lot of systems:"
                            ul {
                                style = "font-size: 60%"
                                fadeUp().li { +"kotlinx-coroutines-rx1, kotlinx-coroutines-rx2, kotlinx-coroutines-reactor" }
                                fadeUp().li { +"kotlinx-coroutines-android" }
                                fadeUp().li { +"kotlinx-coroutines-swing, kotlinx-coroutines-javafx" }
                                fadeUp().li { +"kotlinx-coroutines-jdk8, kotlinx-coroutines-nio" }
                                fadeUp().li { +"kotlinx-coroutines-guava, kotlinx-coroutines-quasar" }
                            }
                        }
                        fadeUp().li {
                            style = "font-weight: bold; color: red;"
                            +"... are a freakin' revolutions!"
                        }
                    }
                }
            }

            section {
                slide {
                    h2 { +"Platforms..." }

                    ul {
                        fadeUp().li { +"The JVM is here to stay!" }
                        fadeUp().li {
                            +"But there are other platforms:"
                            ul {
                                style = "font-size: 80%"
                                fadeUp().li {
                                    +"JavaScript (Web & Node)"
                                    fadeIn().span {
                                        +"... "
                                        i { +"please" }
                                        +" don't do node!"
                                    }
                                }
                                fadeUp().li { +"WebASM" }
                                fadeUp().li { +"Raspberry Pi" }
                                fadeUp().li { +"Linux, Mac, Windows" }
                                fadeUp().li { +"iOS!!!" }
                                fadeUp().li { +"STM32" }
                            }
                        }
                    }

                    stamp().div {
                        style = "position: absolute; bottom: -7%; left: 55%;"
                        span {
                            style = "display: inline-block; font-size: 500%; vertical-align: middle; padding-bottom: 25%"
                            +"}"
                        }
                        span {
                            style = "font-weight: bold;"
                            +"Native"
                        }
                    }
                }

                slide {
                    lazyImg(src = "imgs/multiplatform.jpg")
                }

                slide {
                    lazyImg(src = "imgs/common-arch.png")
                }

                slide {
                    lazyImg(src = "imgs/common-module.png")
                }

                slide {
                    h2 { +"Common modules" }

                    small("fileName") { +"common/build.gradle" }
                    hlCode("groovy") {
                        style = "font-size: 85%; line-height: 1.2em; background-color: white"
                        +animText {
                            """
                                apply plugin: 'kotlin${fInA(1, "-platform-common")}'

                                dependencies {
                                    compile "org.jetbrains.kotlin:kotlin-stdlib${fInA(1, "-common")}:${'$'}kotlin_version"
                                }
                            """
                        }
                    }

                    small("fileName") { +"lib/build.gradle" }
                    hlCode("groovy") {
                        style = "font-size: 85%; line-height: 1.2em; background-color: white"
                        +animText {
                            """
                                apply plugin: 'kotlin${fInA(2, "-platform-jvm")}'

                                dependencies {
                                    ${replace(3, "compile", "expectedBy")} project(':common')
                                    compile "org.jetbrains.kotlin:kotlin-stdlib:${'$'}kotlin_version"
                                }
                            """
                        }
                    }
                }

                slide {
                    h2 { +"expect / actual" }

                    small("fileName") { +"Common" }
                    hlCode("kotlin") {
                        +animText {
                            """
                                ${fInA(2, "expect ")}fun platform(): String

                                fun hello() = println("Hello, ${hl(1, "\${platform()}")}!")
                            """
                        }
                    }

                    small("fileName") { +"JVM" }
                    hlCode("kotlin") {
                        +animText {
                            """
                                ${fInA(3, "actual ")}fun platform() = "JVM"
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Philosophy" }

                    ul {
                        style = "font-size: 90%"
                        fadeUp().li { +"Multiplatform is for " ; b { +"business" } ; +" code." }
                        fadeUp().li { +"APIs (including UI) are available for each platform..." }
                        fadeUp().li {
                            +"...but there is no \"one API to rule them all\"!"
                            br()
                            fadeIn().b {
                                style = "display: block; text-align: right;"
                                +"(except the stdlib)"
                            }
                        }
                        fadeUp().li {
                            b { +"Kotlin/Native" }
                            +" is"
                            ul {
                                style = "font-size: 90%"
                                fadeUp().li { +"...for iOS (duh)" }
                                fadeUp().li { +"...for embedded systems" }
                                fadeUp().li { +"...for (amazing) performance" }
                                fadeUp().li { +"...powered by a very high perf ARC with cycle detection" }
                                fadeUp().li { +"...for C interop" }
                                fadeUp().li { +"...an " ; b { +"amazing tech!!!" } }
                            }
                        }
                    }
                }
            }

            slide {
                h2 { +"Tools" }

                ul {
                    fadeUp().li { +"IntelliJ..." }
                    fadeUp().li { +"...same tools as in Java!" }
                }

                stamp().b {
                    style = "position: absolute; color: blue; left: 36%; top: 54%; font-size: 210%;"
                    span {
                        style = "display: inline-block; transform: rotate(15deg)"
                        +"Done!"
                    }
                }
            }

            section {
                slide {
                    h2 { +"Some libraries" }

                    p {
                        b { +"All" }
                        +" libraries that are available for Java are available for Kotlin "
                        b { +"as-is" }
                        +"."
                    }

                    fadeIn().p {
                        +"Here are "
                        i { +"some" }
                        +" libraries for Kotlin..."
                    }
                }

                slide {
                    h2 { +"RxKotlin" }

                    p { +"ReactiveX for Kotlin" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                list${hl(1, ".toObservable()")}
                                    .filter { it.length >= 5 }
                                    .${hl(2, "subscribeBy")}(
                                        ${hl(2, "onNext =")} { println(it) },
                                        ${hl(2, "onError =")} { it.printStackTrace() },
                                        ${hl(2, "onComplete =")} { println("Done!") }
                                    )
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Kodein" }

                    p { +"KOtlin DEpendency INjection" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                val kodein = Kodein {
                                    ${hl(2, "${hl(1, "bind<CredentialsManager>()")} with singleton")} { CredsManImpl() }
                                }

                                val cm: CredentialsManager ${hl(3, "by kodein.instance()")}
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Kotson" }

                    p { +"KOTlin gSON" }

                    hlCode("kotlin") {
                        +animText {
                            """
                                val obj: JsonObject = jsonObject(
                                    "name" ${hl(1, "to")} "kotson",
                                    "creation" ${hl(1, "to")} Date().getTime(),
                                    "files" ${hl(1, "to")} 4
                                )

                                val name = obj${hl(2, "[\"name\"]")}
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Ktor" }

                    p { +"Non-blocking I/O framework." }

                    hlCode("kotlin") {
                        +animText {
                            """
                                ${hl(1, "fun main(args: Array<String>)")} {
                                    embeddedServer(Netty, 8080) {
                                        routing {
                                            get("/") {
                                                ${hl(2, """call.respondText(
                                                    "Hello, world!",
                                                    ContentType.Text.Html
                                                )""")}
                                            }
                                        }
                                    }.start(wait = true)
                                }
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Spek" }

                    p { +"Unit test specifications framework." }

                    hlCode("kotlin") {
                        +animText {
                            """
                                class SimpleTest : Spek({
                                    describe("a calculator") {
                                        val calculator = SampleCalculator()

                                        it("should know addition") {
                                            assertEquals(6, calculator.sum(2, 4))
                                        }

                                        it("should know substraction") {
                                            assertEquals(2, calculator.subtract(4, 2))
                                        }
                                    }
                                })
                            """
                        }
                    }
                }

                slide {
                    h2 { +"Spring" }

                    p { +"Yeah, spring!" }

                    fadeUp().i {
                        +"Thanks, "
                        b { +"Sebastien Deleuze" }
                        +"!"
                    }
                }
            }

            section {
                slide {
                    h2 { +"Conclusion" }

                    p { +"Kotlin is..." }

                    ul {
                        fadeUp().li { +"Saf" ; b { +"er" } }
                        fadeUp().li { +"Easi" ; b { +"er" } }
                        fadeUp().li { +"Fresh" ; b { +"er" } }
                        fadeUp().li { +"Bett" ; b { +"er" } }
                    }

                    stamp().i { +"...and it allows for " ; b { +"progressive integration" } ; +"!" }
                }

                slide {
                    h2 { +"So..." }
                }
            }

            slide(transition = "zoom") {
                h2 { +"Be In," ; br() ; +"Learn Kotlin!" }

                a(href = "https://github.com/salomonbrys") { +"github.com/salomonbrys" }
                br()
                a(href = "https://twitter.com/salomonbrys") { +"@salomonbrys" }
            }
        }
    }


    val revealRoot = "out/lib/webjars/reveal.js/3.5.0"

    Reveal.initialize {
        slideNumber = true
        history = true
        dependencies = arrayOf(
                RevealPlugins.speakerNotes(revealRoot),
                RevealPlugins.highlightJs(revealRoot)
        )
    }
}
