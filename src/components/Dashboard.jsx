import { useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
} from 'chart.js';


const barData = {
    labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noaybr', 'Dekabr'],
    datasets: [
        {
            label: 'Views',
            data: [12498, 10827, 15832, 23348, 18512, 27983, 29125, 23973, 31763, 71673, 54289, 86238],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderWidth: 2,
            borderColor: 'dodgerblue',
        },
        {
            label: 'Shopping',
            data: [365, 327, 480, 783, 682, 2984, 7823, 6840, 7403, 25832, 19732, 31832],
            backgroundColor: 'rgba(54, 762, 235, 0.5)',
            borderWidth: 2,
            borderColor: 'green',
        },
        {
            label: 'Report',
            data: [120, 180, 220, 205, 349, 712, 823, 782, 982, 1798, 2709, 1503],
            backgroundColor: '#eb3767d4',
            borderWidth: 2,
            borderColor: 'red',
        }
    ]
}

ChartJS.register(
    CategoryScale,
    LinearScale, 
    BarElement,
    Tooltip, 
    Legend,
    LineElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
);

export default function Dashboard(){
    const {mode} = useSelector(state => state.backend);

    return <div className={`${mode ? `dark` : `light`} w-full h-[calc(100vh-70px)]`}>
        <div className={`container w-full h-full flex flex-col`}>
            <h1 className={`text-[#5537EB] text-3xl font-[monospace] font-bold mt-5`}>Dashboard</h1>

            <div className="max-w-[1000px]">
                <Bar key={Math.random()} data={barData} />
            </div>
        </div>
    </div>
}