package pres.salomonbrys.github.com.kodein_demo_dice.ui;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.github.salomonbrys.kodein.jxinject.Jx;

import javax.inject.Inject;

import pres.salomonbrys.github.com.kodein_demo_dice.DiceApplication;
import pres.salomonbrys.github.com.kodein_demo_dice.business.LuckProcessor;

@SuppressLint("Registered")
public class MyOtherActivity extends Activity {

    @Inject
    LuckProcessor luckProcessor;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Jx.of(((DiceApplication) getApplication()).getKodein()).inject(this);
    }
}
