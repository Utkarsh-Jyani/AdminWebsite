import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2415</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4425</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle"></span>Cost
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5625</span>
                <span className="featuredMoneyRate">
                    +2.4<ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
  );
}
