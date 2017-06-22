package pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.impl

import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.Disposable
import pres.salomonbrys.github.com.kodein_demo_dice.business.LuckProcessor
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.LuckPresenter

class LuckPresenterImpl(private val view: LuckPresenter.View, private val luckProcessor: LuckProcessor) : LuckPresenter {

    private var subscription: Disposable? = null

    override fun start() {
        subscription = luckProcessor.flowable
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe {
                    view.setLuck(it)
                }
    }

    override fun stop() {
        subscription?.dispose()
        subscription = null
    }


}
