import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchData } from '../../api';
import { Loading } from '../Loading';
import ApexChart from 'react-apexcharts';

interface IContext {
    coinId: string;
}

interface IOlcv {
    time_open: Date;
    time_close: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}
const Chart = () => {
    const { coinId } = useOutletContext() as IContext;

    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 23 * 7 * 1;
    const { isLoading, data } = useQuery<IOlcv[]>(['ohlcv', coinId], () =>
        fetchData(`coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`)
    );

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: 'high',
                            data: data?.map(price => Math.floor(price.high)) ?? [],
                        },
                        {
                            name: 'low',
                            data: data?.map(price => Math.floor(price.low)) ?? [],
                        },
                    ]}
                    options={{
                        theme: { mode: 'dark' },
                        chart: { height: 600, width: 500, toolbar: { show: false } },
                        stroke: {
                            curve: 'smooth',
                            width: 5,
                        },
                        grid: { show: false },
                        xaxis: {
                            // categories: data?.map(price =>
                            //     new Date(price.time_open)
                            //         .toISOString()
                            //         .split('T')[0]
                            //         .replaceAll('-', '')
                            // ),
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: false },
                        },
                    }}
                />
            )}
        </>
    );
};

export default Chart;
