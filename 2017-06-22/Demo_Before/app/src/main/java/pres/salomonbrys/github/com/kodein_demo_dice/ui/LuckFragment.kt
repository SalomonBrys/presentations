package pres.salomonbrys.github.com.kodein_demo_dice.ui

import android.annotation.SuppressLint
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.github.salomonbrys.kodein.KodeinInjected
import com.github.salomonbrys.kodein.KodeinInjector
import com.github.salomonbrys.kodein.android.appKodein
import com.github.salomonbrys.kodein.instance
import com.github.salomonbrys.kodein.with
import kotlinx.android.synthetic.main.fragment_luck.*
import kotlinx.android.synthetic.main.fragment_luck.view.*
import pres.salomonbrys.github.com.kodein_demo_dice.R
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.LuckPresenter

class LuckFragment : Fragment(), LuckPresenter.View, KodeinInjected {

    override val injector = KodeinInjector()

    private val presenter: LuckPresenter by injector.with<LuckPresenter.View>(this).instance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        injector.inject(appKodein())
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View =
            inflater.inflate(R.layout.fragment_luck, container, false).apply {
                luckValue.text = "0%"
            }

    @SuppressLint("SetTextI18n")
    override fun setLuck(luck: Int) {
        luckValue.text = "$luck%"
    }

    override fun onStart() {
        super.onStart()
        presenter.start()
    }

    override fun onStop() {
        presenter.stop()
        super.onPause()
    }
}
