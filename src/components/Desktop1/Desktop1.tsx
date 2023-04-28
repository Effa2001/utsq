import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CartIconIcon } from './CartIconIcon';
import classes from './Desktop1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Ellipse4Icon } from './Ellipse4Icon';
import { Ellipse5Icon } from './Ellipse5Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.food}>Food</div>
      <div className={classes.breakfast}>Breakfast</div>
      <div className={classes.lunch}>Lunch</div>
      <div className={classes.dinner}>Dinner</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.center}>Center</div>
      <div className={classes.cartIcon}>
        <CartIconIcon className={classes.icon} />
      </div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon2} />
      </div>
      <div className={classes.unnamed}>0</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.grilledChickenWithVegatable}>
        <div className={classes.textBlock}>Grilled Chicken With </div>
        <div className={classes.textBlock2}>Vegatable</div>
      </div>
      <div className={classes.grilledChickenWithVegatable2}>
        <div className={classes.textBlock3}>Grilled Chicken With </div>
        <div className={classes.textBlock4}>Vegatable</div>
      </div>
      <div className={classes.grilledChickenWithVegatable3}>
        <div className={classes.textBlock5}>Grilled Chicken With </div>
        <div className={classes.textBlock6}>Vegatable</div>
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.foodCenter}>
        <div className={classes.textBlock7}>Food </div>
        <div className={classes.textBlock8}> Center</div>
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        <div className={classes.textBlock9}>Lorem ipsum dolor sit amet, consectetur </div>
        <div className={classes.textBlock10}>adipiscing elit. Ergo instituto veterum, quo </div>
        <div className={classes.textBlock11}>etiam Stoici utuntur</div>
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes._50}>$50</div>
      <div className={classes._40}>$40</div>
      <div className={classes._502}>$50</div>
      <div className={classes.orderNow}>Order Now</div>
      <div className={classes.pre}>Pre</div>
      <div className={classes.next}>Next</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon5} />
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse5}>
        <Ellipse5Icon className={classes.icon8} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon9} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon10} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon11} />
      </div>
    </div>
  );
});
