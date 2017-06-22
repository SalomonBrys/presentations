package pres.salomonbrys.github.com.kodein_demo_dice.ui

import android.annotation.SuppressLint
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.fragment_dice.*
import kotlinx.android.synthetic.main.fragment_dice.view.*
import pres.salomonbrys.github.com.kodein_demo_dice.DiceApplication
import pres.salomonbrys.github.com.kodein_demo_dice.R
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.DicePresenter
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.impl.DicePresenterImpl

@SuppressLint("SetTextI18n")
class DiceFragment : Fragment(), DicePresenter.View {

    companion object {
        const val ARG_SIDES = "sides"

        fun newInstance(sides: Int) = DiceFragment().apply {
            arguments = Bundle().apply {
                putInt(ARG_SIDES, sides)
            }
        }
    }

    override val sides get() = arguments.getInt(ARG_SIDES)

    private val presenter: DicePresenter by lazy { DicePresenterImpl(this, (activity.application as DiceApplication).luckProcessor) }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? =
            inflater.inflate(R.layout.fragment_dice, container, false).apply {
                diceTitle.text = "D$sides"

                rollButton.setOnClickListener { presenter.roll() }
            }

    override fun setResult(result: Int) {
        diceValue.text = result.toString()
    }
}
