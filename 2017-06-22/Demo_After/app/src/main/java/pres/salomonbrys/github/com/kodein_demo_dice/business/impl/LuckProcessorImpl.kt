package pres.salomonbrys.github.com.kodein_demo_dice.business.impl

import io.reactivex.BackpressureStrategy
import io.reactivex.Flowable
import io.reactivex.subjects.BehaviorSubject
import pres.salomonbrys.github.com.kodein_demo_dice.business.LuckProcessor
import pres.salomonbrys.github.com.kodein_demo_dice.utils.MovingAverageCalculator

class LuckProcessorImpl(private val calc: MovingAverageCalculator) : LuckProcessor {

    private val subject = BehaviorSubject.createDefault(0)

    override val flowable: Flowable<Int> = subject.toFlowable(BackpressureStrategy.LATEST)

    override fun add(success: Boolean) {
        calc += if (success) 100 else 0
        subject.onNext(calc.average)
    }

}
