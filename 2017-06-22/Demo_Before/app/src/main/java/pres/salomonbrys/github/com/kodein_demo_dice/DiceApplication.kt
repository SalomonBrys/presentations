package pres.salomonbrys.github.com.kodein_demo_dice

import android.app.Application
import com.github.salomonbrys.kodein.*
import com.github.salomonbrys.kodein.jxinject.jxInjectorModule
import pres.salomonbrys.github.com.kodein_demo_dice.business.businessModule
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.presenterModule
import pres.salomonbrys.github.com.kodein_demo_dice.utils.MovingAverageCalculator
import java.security.SecureRandom
import java.util.*

class DiceApplication : Application(), KodeinAware {

    override val kodein: Kodein by Kodein.lazy {

        import(jxInjectorModule)

        import(businessModule)
        import(presenterModule)

        // UTILS

        bind<Random>() with provider { SecureRandom() }
        bind<Random>(tag = "unsafe") with provider { Random() }

        bind() from provider { MovingAverageCalculator() }

    }

}
