import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import VideoDetail from './components/VideoDetail';
import ChannelDeatil from './components/ChannelDeatil';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';

const App = () => (
    <BrowserRouter>
        <Box sx={{ background: '#000' }}>
            Navbar
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id'  element={<VideoDetail />} />
                <Route path='/channel/:id'  element={<ChannelDeatil />} />
                <Route path='/search/:id'  element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App