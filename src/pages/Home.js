
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { UserData } from "../dummyData";
import WidgetLg from "../components/widgetLg/WidgetLg";
import WidgetSm from "../components/widgetSm/WidgetSm";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
        </div>
        </div>
    )
}