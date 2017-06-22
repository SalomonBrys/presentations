package pres.salomonbrys.github.com.kodein_demo_dice.ui.pres

interface DicePresenter {

    fun roll()

    interface View {

        val sides: Int

        fun setResult(result: Int)

    }

}
