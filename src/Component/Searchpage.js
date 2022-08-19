import React from 'react'
import './Searchpage.css'
import TuneOutLineedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function Searchpage() {
    return (
        <div className='searchpage'>

            <div className="searchpage_filter">
                <TuneOutLineedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow

                subs='2M'
                timeStamp='7 days ago'
                noOfVideo={352}
                verified
                channel='Aakash Chopra'
                description='Video related to international cricket and the many league related to many country '
                channelImage='https://yt3.ggpht.com/ytc/AKedOLQ978uXMi8azz1Qdnjnw875k_foEVk8IZMUX1oOLl8=s88-c-k-c0x00ffffff-no-rj'


            />
            <hr />
            <VideoRow
                title="MS DHONI's impact on CSK /Cricket Aakash"
                views='90M'
                subs='2M'
                timeStamp='7 days ago'
                channel='Aakash Chopra'
                channelImage='https://yt3.ggpht.com/ytc/AKedOLQ978uXMi8azz1Qdnjnw875k_foEVk8IZMUX1oOLl8=s88-c-k-c0x00ffffff-no-rj'
                image='https://www.youtube.com/embed/vtHVMshZKOQ'
                description='Video related to international cricket and the many league related to many country '


            />
            <VideoRow
                title='Timi Ra Ma Lyrics Video|| Dixita Karki'
                views='10M'
                subs='1M'
                timeStamp='3 days ago'
                channel='Dixita Karki'
                channelImage='https://yt3.ggpht.com/NWEJpUqVhEWju6_MJLHnGMtQlYcUeej3W5W8A_WJVxQMxLRhS0e8NaP5XA_Nr2per4iHVSi7pw=s88-c-k-c0x00ffffff-no-rj'
                image='https://www.youtube.com/embed/ze2d-6YYBdQ?list=RDze2d-6YYBdQ'
                description='Video related to international cricket and the many league related to many country '


            />
            <VideoRow
                title="The Daddies Army's Ultimate Comeback"
                views='100 M'
                subs='324K'
                timeStamp='1 days ago'
                channel='Chennai super kings'
                channelImage='https://yt3.ggpht.com/ytc/AKedOLQE8LAnd2jDidRT8hrt77DQ8mkpN2526EdN6hfChjc=s88-c-k-c0x00ffffff-no-rj'
                image='https://www.youtube.com/embed/0LyAtyGRy2s'
                description='Video related to international cricket and the many league related to many country '



            />




        </div>
    )
}

export default Searchpage
