import org.w3c.dom.get
import kotlin.browser.window

class RevealInit(
        val progress: Boolean = true,
        val slideNumber: Boolean = false,
        val history: Boolean = false,
        val fragments: Boolean = true,
        val showNotes: Boolean = false,
        val previewLinks: Boolean = false,
        val transition: String = "slide", // none/fade/slide/convex/concave/zoom
        val dependencies: Array<Dependency>
) {
    class Dependency(val src: String, val async: Boolean = true, val callback: (() -> Unit)? = null)
}

external interface RevealJs {
    fun initialize(init: RevealInit)
}

external val Reveal: RevealJs

external interface HighlightJs {
    fun initHighlightingOnLoad()
}

external val hljs: HighlightJs

fun main(args: Array<String>) {

    val revealRoot = "out/lib/webjars/reveal.js/3.5.0"

    Reveal.initialize(RevealInit(
            slideNumber = true,
//            showNotes = true,
            history = true,
            dependencies = arrayOf(
                    RevealInit.Dependency("$revealRoot/plugin/notes/notes.js"),
                    RevealInit.Dependency("$revealRoot/plugin/highlight/highlight.js") { hljs.initHighlightingOnLoad() }
            )
    ))

}
