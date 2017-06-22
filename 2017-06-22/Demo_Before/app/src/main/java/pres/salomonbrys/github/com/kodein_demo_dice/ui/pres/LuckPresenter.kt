package pres.salomonbrys.github.com.kodein_demo_dice.ui.pres

interface LuckPresenter {

    fun start()
    fun stop()

    interface View {

        fun setLuck(luck: Int)

    }

}
