package pres.salomonbrys.github.com.kodein_demo_dice.ui

import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentStatePagerAdapter
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import pres.salomonbrys.github.com.kodein_demo_dice.R

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        viewPager.offscreenPageLimit = 6
        viewPager.adapter = SectionsPagerAdapter(supportFragmentManager)
    }


   inner class SectionsPagerAdapter(fm: FragmentManager) : FragmentStatePagerAdapter(fm) {

        private val sides = arrayOf(6, 8, 10, 12, 20)

        override fun getItem(position: Int): Fragment = when (position) {
            0 -> LuckFragment()
            else -> DiceFragment.newInstance(sides[position - 1])
        }

        override fun getCount(): Int {
            return sides.size + 1
        }
    }
}
