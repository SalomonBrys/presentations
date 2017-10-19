package pres.salomonbrys.github.com.kodein_demo_dice.ui.pres

import com.github.salomonbrys.kodein.Kodein
import com.github.salomonbrys.kodein.bind
import com.github.salomonbrys.kodein.factory
import com.github.salomonbrys.kodein.instance
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.impl.DicePresenterImpl
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.impl.LuckPresenterImpl

val presenterModule = Kodein.Module {

    bind<LuckPresenter>() with factory { view: LuckPresenter.View -> LuckPresenterImpl(view, instance()) }

    bind<DicePresenter>() with factory { view: DicePresenter.View -> DicePresenterImpl(view, instance()) }

}
