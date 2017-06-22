package pres.salomonbrys.github.com.kodein_demo_dice.ui

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.github.salomonbrys.kodein.android.KodeinSupportFragment
import com.github.salomonbrys.kodein.instance
import com.github.salomonbrys.kodein.with
import kotlinx.android.synthetic.main.fragment_dice.*
import kotlinx.android.synthetic.main.fragment_dice.view.*
import pres.salomonbrys.github.com.kodein_demo_dice.R
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.DicePresenter

@SuppressLint("SetTextI18n")
class DiceFragment : KodeinSupportFragment(), DicePresenter.View {

    companion object {
        const val ARG_SIDES = "sides"

        fun newInstance(sides: Int) = DiceFragment().apply {
            arguments = Bundle().apply {
                putInt(ARG_SIDES, sides)
            }
        }
    }

    override val sides get() = arguments.getInt(ARG_SIDES)

    private val presenter: DicePresenter by with<DicePresenter.View>(this).instance()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? =
            inflater.inflate(R.layout.fragment_dice, container, false).apply {
                diceTitle.text = "D$sides"

                rollButton.setOnClickListener { presenter.roll() }
            }

    override fun setResult(result: Int) {
        diceValue.text = result.toString()
    }
}
