import {render, screen, cleanup } from '@testing-library/react';
import DailyWeather from '../DailyWeather';

afterEach(()=>{
    cleanup();
})

test('testing daily weather',()=>{
    render(<DailyWeather></DailyWeather>)
    const dailyweather = screen.getByTestId('test-daily-weather')
    expect((dailyweather)).toBeInTheDocument()
});