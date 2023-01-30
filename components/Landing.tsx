import React, { useEffect, useState } from 'react';
import Image from '../node_modules/next/image';
import LandingImg from '../assets/images/landing.png'
import LoaderBtn from './common/buttons/LoaderBtn';
import SearchBar from './common/SearchBar';

//import { storage } from '../utils/firebase';    <--- images fetchinimas is storage
//import { ref, listAll, getDownloadURL } from 'firebase/storage';    <--- images fetchinimas is storage
import { BoxData } from '../interfaces';
import { fetchBoxesFromFirestore } from '../utils/firebaseFetch';



//import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';     <--- images fetchinimas is storage


const Landing = () => {


  //const [imageList, setImageList] = useState([]);         <--- images fetchinimas is storage
  //const imageListRef = ref(storage, "box-images/");       <--- images fetchinimas is storage

  const [boxes, setBoxes] = useState<BoxData[]>();   //sukuriamas useState masyvas, kuriame bus talpinami darbai
    
    useEffect(() => {
        initialFetch()
    }, [])

    const initialFetch = async() => {
      var firebaseBoxes:BoxData[] = await fetchBoxesFromFirestore();
      setBoxes(firebaseBoxes)      //i setJobs (usestate kintamojo masyva) idedami localJobs
    }

  

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     console.log(response);
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {                   <--- images fetchinimas is storage
  //         setImageList((prev): any => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div className="landing">
      <Image src={LandingImg} alt ="nice" />
      <div className="content">
        {boxes && boxes.map((data:BoxData) => {
            return(
              <div className="box" key={data.id}>
                <Image src={data.imageUrl}  width={220} height={200} alt="cool example" />
                <h1>{data.title}</h1>
                <p>{data.text}</p>
              </div>
            )
        })}
      </div>
        
        <div className="content">
          <div className='ui'>
            <LoaderBtn />
            <SearchBar />
          </div>
        
        </div>
        <div>
          {/* {imageList.map((url, key) => {
            return<img src={url} width={200} key={key} alt={"nice logo"}/>
          })} */}

      </div>
    </div>
  );
};



export default Landing;