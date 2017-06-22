import com.github.salomonbrys.kodein.*
import java.security.SecureRandom
import java.util.*
import java.util.logging.Logger

interface GameManager
class GameManagerImpl(random: Random) : GameManager

class Application(kodein: Kodein) {

    val game: GameManager = kodein.instance()

    fun run(): Unit = TODO()
}

fun main(args: Array<String>) {

    val kodein = Kodein {

        bind<GameManager>() with eagerSingleton { GameManagerImpl(instance()) }

        bind<Random>() with provider { SecureRandom() }

    }

    val application = Application(kodein)
    application.run()

}





class Application2(override val kodein: Kodein): KodeinAware {

    val game: GameManager = instance()

    fun run(): Unit = TODO()
}
