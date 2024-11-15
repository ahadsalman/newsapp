import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import sample from '../sample.json';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  //  articles = [

  //     {
  //       "source": { "id": null, "name": "CNBC" },
  //       "author": "Jordan Novet",
  //       "title": "Palantir shares surge on rosy revenue outlook - CNBC",
  //       "description": "Palantir is seeing a pickup in artificial intelligence among its U.S. government client base.",
  //       "url": "https://www.cnbc.com/2024/11/04/palantir-pltr-q3-earnings-report-2024.html",
  //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/108057323-1730755896770-gettyimages-2058964969-FOUNDRYCON_SPEAKERS.jpeg?v=1730755987&w=1920&h=1080",
  //       "publishedAt": "2024-11-04T21:39:55Z",
  //       "content": "Palantir shares jumped 13% in extended trading on Monday after the data analytics software maker reported robust third-quarter results and revenue guidance.\r\nHere's how the company did compared with … [+2478 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Slate Magazine" },
  //       "author": "Slate Staff",
  //       "title": "An Incredibly Detailed List of What Time the Useful Stuff Will Go Down on Election Night - Slate",
  //       "description": "You basically don’t have to tune in until 9 p.m. EST, but here’s what we’ll probably know before then, and after, anyway.",
  //       "url": "https://slate.com/news-and-politics/2024/11/election-results-when-polls-close-trump-harris-2024.html",
  //       "urlToImage": "https://compote.slate.com/images/1f7c85e5-4124-42b8-9fe4-bac6e55c2ea7.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
  //       "publishedAt": "2024-11-04T21:24:00Z",
  //       "content": "As we head into Election Day, you might be wondering: What time will we know who has won? The problem is: We dont know! It took four days for the 2020 presidential race to be called. While it seems u… [+14177 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Eonline.com" },
  //       "author": null,
  //       "title": "Travis Kelce Shares Heartwarming Moment With Taylor Swift's Brother Austin at Eras Concert - E! NEWS",
  //       "description": "During Taylor Swift’s Eras Tour show in Indianapolis Nov. 2, Travis Kelce sweetly greeted her brother Austin Swift and mom Andrea Swift.",
  //       "url": "https://www.eonline.com/news/1409490/travis-kelce-shares-heartwarming-moment-with-taylor-swifts-brother-austin-at-eras-concert",
  //       "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2024916/cr_1200x1200-241016060928-GettyImages-2170181497.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
  //       "publishedAt": "2024-11-04T21:20:52Z",
  //       "content": "Travis Kelce is certainly close to Taylor Swifts motherand trusts her brother like his brother.   \r\nDuring the Karma singers Eras Tour in Indianapolis Nov. 2, the Kansas City Chiefs player proved tha… [+900 chars]"
  //     },
  //     {
  //       "source": { "id": "politico", "name": "Politico" },
  //       "author": "Steven Shepard",
  //       "title": "Here’s Harris’ path to winning - POLITICO",
  //       "description": "Her strongest issue is abortion.",
  //       "url": "https://www.politico.com/news/2024/11/04/kamala-harris-election-win-scenario-00187156",
  //       "urlToImage": "https://static.politico.com/77/96/6e81622849088205ff40a96805e0/useuntil12-03-2024-harrismichigan-008.jpg",
  //       "publishedAt": "2024-11-04T21:00:00Z",
  //       "content": "The vice presidents paid-media campaign, along with her allies, has been laser-focused on two themes: positioning Harris as a middle-class champion (and Trump as out for himself and other rich people… [+5181 chars]"
  //     },
  //     {
  //       "source": { "id": "associated-press", "name": "Associated Press" },
  //       "author": "JOHN SEEWER",
  //       "title": "Ex-officer found guilty in the 2020 shooting death of Andre Hill - The Associated Press",
  //       "description": "A former police officer who shot and killed Andre Hill has been found guilty in the shooting. A jury on Monday convicted former Columbus Officer Adam Coy of murder. Coy testified during the trial that he thought Hill was holding a gun and going to shoot him s…",
  //       "url": "https://apnews.com/article/police-officer-andre-hill-trial-verdict-7c9405baf78daf4394cb74df9ad2191e",
  //       "urlToImage": "https://dims.apnews.com/dims4/default/8130b02/2147483647/strip/true/crop/3572x2009+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F17%2Fcd%2Fcd4fda7abab3bdcf5b8b41342df6%2F58df18aeed8a43d3a17e39ae43d73f33",
  //       "publishedAt": "2024-11-04T19:58:00Z",
  //       "content": "A former police officer was convicted of murder Monday in the shooting of Andre Hill, a Black man who was holding a cellphone and keys when he was killed.\r\nOfficer Adam Coy, who served nearly 20 year… [+4501 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Yahoo Entertainment" },
  //       "author": "Liz Roscher",
  //       "title": "Spurs head coach Gregg Popovich reportedly out indefinitely after weekend health issue - Yahoo Sports",
  //       "description": "Popovich, 75, wasn't able to coach the Spurs on Saturday when they took on the Timberwolves.",
  //       "url": "https://sports.yahoo.com/spurs-head-coach-gregg-popovich-reportedly-out-indefinitely-after-weekend-health-issue-160241114.html",
  //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/RNFHzWUyEoY2EqQQxgabsg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NjI-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/2f5d9900-9ac6-11ef-a73b-70a32cc553bf",
  //       "publishedAt": "2024-11-04T19:42:35Z",
  //       "content": "San Antonio Spurs head coach Gregg Popovich will reportedly be sidelined indefinitely after suffering a health issue over the weekend, according to ESPN's Shams Charania. Assistant Mitch Johnson is e… [+1388 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Foxweather.com" },
  //       "author": "Heather Brinkmann",
  //       "title": "Chiefs-Buccaneers game in Kansas City could have stormy implications for Monday Night Football - Fox Weather ",
  //       "description": "The Chiefs will have more to worry about than their unbeaten record night when they take on the Tampa Bay Buccaneers during Monday Night Football as storms could cause big problems in Kansas City.",
  //       "url": "https://www.foxweather.com/lifestyle/chiefs-bucs-kansas-city-tampa-monday-night-football-nfl",
  //       "urlToImage": "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2024/11/1024/512/screenshot-2024-11-04-at-2.30.59-pm.png?ve=1&tl=1",
  //       "publishedAt": "2024-11-04T19:31:25Z",
  //       "content": "KANSAS CITY – The Chiefs will have more to worry about than their unbeaten record when they take on the Tampa Bay Buccaneers during Monday Night Football as storms could cause big problems in Kansas … [+1311 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Hollywood Reporter" },
  //       "author": "Caitlin Huston",
  //       "title": "Where Did All the Hollywood Assistants Go? - Hollywood Reporter",
  //       "description": "As major studios and agencies cut costs, entry-level jobs — once a stepping stone to an entertainment career — are going the way of the Rolodex.",
  //       "url": "http://www.hollywoodreporter.com/business/business-news/hollywood-assistants-work-hiring-1236053258/",
  //       "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/10/31rep_nothiring-MAIN-H-2024.jpg?w=1000&h=563&crop=1",
  //       "publishedAt": "2024-11-04T19:20:18Z",
  //       "content": "While Hollywood’s strikes last year yielded certain protections for writers and actors, many other workers say they’re now seeing a higher barrier to entry level jobs on the other side of it. \r\nAcros… [+3306 chars]"
  //     },
  //     {
  //       "source": { "id": null, "name": "Variety" },
  //       "author": "Ramin Setoodeh",
  //       "title": "‘Is the Sperm Still in There?’: Daniel Craig and Drew Starkey on Making ‘Queer,’ the Year’s Most Audacious Love Story - Variety",
  //       "description": "Daniel Craig and Drew Starkey discuss making Luca Guadagnino's 'Queer,' and leaving James Bond and 'Outer Banks' behind for a provocative love story.",
  //       "url": "https://variety.com/2024/film/features/daniel-craig-drew-starkey-queer-sex-gay-roles-1236199554/",
  //       "urlToImage": "https://variety.com/wp-content/uploads/2024/11/Drew-Starkey-Daniel-Craig-Queer-Variety-2.jpg?crop=0px%2C19px%2C1920px%2C1080px&resize=1000%2C563",
  //       "publishedAt": "2024-11-04T19:00:00Z",
  //       "content": "Luca Guadagnino’s new film “Queer” opens with a series of tableaux — little still-life images of glasses, trinkets and books. The objects are meant to evoke the lives of its two lead characters, gay … [+21731 chars]"
  //     },
  //     {
  //       "source": { "id": "espn", "name": "ESPN" },
  //       "author": "Todd Archer",
  //       "title": "Source: Dak out weeks, Lamb injury not serious - ESPN",
  //       "description": "Cowboys quarterback Dak Prescott is expected to miss several weeks with a hamstring injury, a source told ESPN's Adam Schefter on Monday.",
  //       "url": "https://www.espn.com/nfl/story/_/id/42192345/cowboys-dak-prescott-expected-miss-several-weeks-sources-say",
  //       "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1104%2Fr1410350_1296x729_16%2D9.jpg",
  //       "publishedAt": "2024-11-04T19:00:00Z",
  //       "content": "Dallas Cowboys quarterback Dak Prescott is expected to miss several weeks with a hamstring injury, a source told ESPN's Adam Schefter on Monday.\r\nPrescott is seeking a second opinion to confirm treat… [+2595 chars]"
  //     },
  //     {
  //       "source": { "id": "cnn", "name": "CNN" },
  //       "author": "Daniel Dale",
  //       "title": "Fact check: Trump begins final full day of campaign with repeat lies about immigration and jobs - CNN",
  //       "description": "Former President Donald Trump began the final full day of the 2024 presidential campaign as he has spent many of the days prior: lying about immigration, the economy and other subjects.",
  //       "url": "https://www.cnn.com/2024/11/04/politics/fact-check-trump-campaign-final-day-election/index.html",
  //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-11-04t165236z-1465058078-rc2fyaaksbze-rtrmadp-3-usa-election-trump.JPG?c=16x9&q=w_800,c_fill",
  //       "publishedAt": "2024-11-04T18:35:00Z",
  //       "content": "Former President Donald Trump began the final full day of the 2024 presidential campaign as he has spent many of the days prior: lying about immigration, the economy and other subjects.\r\nAt the first… [+10483 chars]"
  //     },
  //     {
  //       "source": { "id": "usa-today", "name": "USA Today" },
  //       "author": "Marina Pitofsky, Karissa Waddick, Rachel Barber, Josh Meyer, Bart Jansen, Riley Beggin, Sudiksha Kochi, Joey Garrison",
  //       "title": "Election 2024 live updates: Trump, Harris await Election Day results; new polls - USA TODAY",
  //       "description": "Just one day until Election Day. Americans will make their voices heard on Tuesday, choosing between former President Donald Trump and Vice President Kamala Harris.",
  //       "url": "https://www.usatoday.com/story/news/politics/elections/2024/11/04/election-2024-live-updates-trump-harris/76033477007/",
  //       "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/11/USAT/75183810007-2171259225.jpg?crop=5752,3236,x0,y299&width=3200&height=1801&format=pjpg&auto=webp",
  //       "publishedAt": "2024-11-04T18:05:18Z",
  //       "content": "Just one day until Election Day.\r\nAmericans across the country will make their voices heard on Tuesday, choosing between former President Donald Trump and Vice President Kamala Harris. The Republican… [+38607 chars]"
  //     },
  //     {
  //       "source": { "id": "usa-today", "name": "USA Today" },
  //       "author": "Michael Middlehurst-Schwartz",
  //       "title": "NFL trade deadline live updates: Latest news, rumors, analysis ahead of Tuesday's cutoff - USA TODAY",
  //       "description": "The NFL's trade deadline is drawing closer. What's the latest buzz from around the league on potential moves? Check back here for all the news.",
  //       "url": "https://www.usatoday.com/story/sports/nfl/2024/11/04/nfl-trade-deadline-live-updates-news-rumors-analysis/76040508007/",
  //       "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/11/04/USAT/76040518007-usatsi-24607772.jpg?crop=3970,2234,x5,y111&width=3200&height=1801&format=pjpg&auto=webp",
  //       "publishedAt": "2024-11-04T18:00:00Z",
  //       "content": "The NFL trade deadline is drawing close, with teams having one last chance to make a significant roster shake-up before forging on with the second half of the regular season.\r\nTuesday at 4 p.m. ET ma… [+4724 chars]"
  //     },
  //     {
  //       "source": { "id": "associated-press", "name": "Associated Press" },
  //       "author": "JOSEPH WILSON",
  //       "title": "Heavy rains in Barcelona disrupt rail service as troops search for more flood victims in Valencia - The Associated Press",
  //       "description": "The recurrent storms in eastern Spain that led to massive flooding last week and killed over 200 people, mostly near Valencia, are dumping rain on Barcelona. Monday's downpour prompted authorities to suspend commuter rail service. Spanish Transport Minister Ó…",
  //       "url": "https://apnews.com/article/spain-floods-valencia-barcelona-climate-e6ba10b6d7ae7626dbee8b23f4fe6703",
  //       "urlToImage": "https://dims.apnews.com/dims4/default/c75073a/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F28%2Fba%2F57abef30a5b1a4fc61a788d571bb%2F14b05a4b002745628a44ffb87f8b29c0",
  //       "publishedAt": "2024-11-04T17:54:00Z",
  //       "content": "BARCELONA, Spain (AP) The recurrent storms in eastern Spain that led to massive flooding last week and killed at least 217 people, mostly near Valencia, dumped rain on Barcelona on Monday, prompting … [+3128 chars]"
  //     },
  //     {
  //       "source": { "id": "cbs-news", "name": "CBS News" },
  //       "author": "Stefan Becket",
  //       "title": "Revisit the 2020 election results map ahead of the 2024 presidential election - CBS News",
  //       "description": "Donald Trump is hoping to win back states that he captured in 2016, while Kamala Harris is hoping to hold the states President Biden won in 2020.",
  //       "url": "https://www.cbsnews.com/news/revisit-2020-election-results-maps/",
  //       "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/10/27/25276cd0-55ed-4eab-b208-5b71d9b7ca84/thumbnail/1200x630/f832bf1906cf9b3ffceb7d918f10ee4d/gettyimages-1486886944.jpg?v=379420b9063a2aadbcd559df18e2d1ae",
  //       "publishedAt": "2024-11-04T17:49:51Z",
  //       "content": "Former President Donald Trump and Vice President Kamala Harris are heading into Election Day with razor-thin margins separating them in the handful of states that will ultimately decide the winner. \r… [+3063 chars]"
  //     },
  //     {
  //       "source": { "id": "business-insider", "name": "Business Insider" },
  //       "author": "Theron Mohamed",
  //       "title": "Warren Buffett's Berkshire Hathaway hoarded cash, sold stocks, and halted buybacks ahead of the election - Business Insider",
  //       "description": "Warren Buffett's Berkshire Hathaway built a record cash pile, reduced its Apple and Bank of America stakes, and halted stock buybacks last quarter.",
  //       "url": "https://www.businessinsider.com/warren-buffett-berkshire-hathaway-cash-stocks-buybacks-trump-harris-election-2024-11",
  //       "urlToImage": "https://i.insider.com/6728ebdc192f52589855d8cc?width=1200&format=jpeg",
  //       "publishedAt": "2024-11-04T17:45:00Z",
  //       "content": "Investors are puzzling over how to play the market ahead of Tuesday's US presidential election. Warren Buffett flashed his poker hand on Saturday, revealing he amassed a record amount of cash, cut hi… [+2552 chars]"
  //     },
  //     {
  //       "source": { "id": "reuters", "name": "Reuters" },
  //       "author": "Jack Queen",
  //       "title": "Elon Musk lawyer says $1 million voter giveaway winners are not random - Reuters",
  //       "description": "Elon Musk's pro-Trump group does not choose the winners of its $1 million-a-day giveaway to registered voters at random, but instead picks people who would be good spokespeople for its agenda, a lawyer for the billionaire said on Monday.",
  //       "url": "https://www.reuters.com/legal/judge-weighs-challenge-elon-musks-1-million-voter-giveaway-2024-11-04/",
  //       "urlToImage": "https://www.reuters.com/resizer/v2/7CKS7VAWJRPEHEJUEYO2G7JTVY.jpg?auth=057f8f15868b67b04c681ebfd2de4c1f3b5563b283dbc83cd0f64081df5f94e2&height=1005&width=1920&quality=80&smart=true",
  //       "publishedAt": "2024-11-04T17:15:53Z",
  //       "content": null
  //     },
  //     {
  //       "source": { "id": null, "name": "The Weather Channel" },
  //       "author": "The Weather Channel",
  //       "title": "Tropical Storm Watch Issued For Florida Keys - The Weather Channel",
  //       "description": "Here's the latest on Tropical Storm Rafael and where it may track.",
  //       "url": "https://weather.com/storms/hurricane/news/2024-11-04-tropical-storm-rafael-caribbean-gulf-hurricane",
  //       "urlToImage": "https://s.w-x.co/rafael-4nov24-pm.jpg",
  //       "publishedAt": "2024-11-04T16:18:45Z",
  //       "content": "At a Glance\r\n\u003Cul\u003E\u003Cli\u003ETropical Storm Rafael has formed in the southern Caribbean.\u003C/li\u003E\u003Cli\u003ERafael could become a hurricane in the western Caribbean Sea.\u003C/li\u003E\u003Cli\u003EOnce the system enters the Gulf of Mexic… [+3100 chars]"
  //     },
  //     {
  //       "source": { "id": "usa-today", "name": "USA Today" },
  //       "author": "Eric Lagatta",
  //       "title": "Remember those Starliner astronauts still in space? Don’t worry, they can vote. - USA TODAY",
  //       "description": "Ahead of the Nov. 5 election, four Americans are in space who may want to vote. Fortunately for them, NASA has long had a plan to make it possible.",
  //       "url": "https://www.usatoday.com/story/news/politics/elections/2024/11/04/starliner-astronauts-vote-space-election-station/75935269007/",
  //       "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/07/USAT/73597274007-usatsi-23208238.jpg?crop=3717,2091,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
  //       "publishedAt": "2024-11-04T16:17:25Z",
  //       "content": "\u003Cul\u003E\u003Cli\u003EAstronauts have voted in U.S. elections since 1997 when the Texas Legislature passed a bill that allowed NASA astronauts to cast ballots from orbit.\u003C/li\u003E\u003Cli\u003EJust like any other voter, astrona… [+6334 chars]"
  //     }
  //   ]

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  capitalize(val){
    
      return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalize(this.props.category)}- News`;
  }

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=243c047bca0e4e3c83196411d9c2babb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      this.setState({ articles: [], loading: false });
    }
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    // try {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=243c047bca0e4e3c83196411d9c2babb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles || [],
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     });
    // } catch (error) {
    //     console.error("Failed to fetch articles:", error);
    //     this.setState({ articles: [], loading: false });
    // }

    this.fetchData();
  }

  // handlePrev = async () => {
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=243c047bca0e4e3c83196411d9c2babb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
  //   // this.setState({loading:true})
  //   // let data = await fetch(url)
  //   // let parsedData = await data.json()

  //   // this.setState({
  //   //     page: this.state.page - 1,
  //   //     articles: parsedData.articles,
  //   //     loading:false
  //   //   })

  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.fetchData();
  // };

  // handleNext = async () => {
  //   // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

  //   //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=243c047bca0e4e3c83196411d9c2babb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
  //   //   this.setState({loading:true})
  //   //   let data = await fetch(url)
  //   //   let parsedData = await data.json()

  //   // this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false
  //   //   })

  //   // }
  //   this.setState({
  //     page: this.state.page + 1,
  //   });

  //   this.fetchData();
  // };

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({page: this.state.page +1})
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=243c047bca0e4e3c83196411d9c2babb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles) || [],
        totalResults: parsedData.totalResults,
      
      });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      this.setState({ articles: [], loading: false });
    }
  
  };

  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center"> Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="row">
          {!this.state.laoding &&
            this.state.articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6" key={element.url}>
                  <NewsItem
                    title={element.title?.slice(0, 60)}
                    description={element.description?.slice(0, 120)}
                    imgurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            </div>
            </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePrev}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              onClick={this.handleNext}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div> */}
          
        </div>
      
    );
  }
}

export default News;
