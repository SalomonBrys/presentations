package pres.salomonbrys.github.com.kodein_demo_dice.business

import io.reactivex.Flowable

interface LuckProcessor {

    fun add(success: Boolean)

    val flowable: Flowable<Int>

}
