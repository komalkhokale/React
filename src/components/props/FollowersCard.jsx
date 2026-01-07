import React from 'react'
import CardProject from './CardProject'

const FollowersCard = () => {
    const users = [
        {
          name: "Aarav Sharma",
          bio: "Frontend developer | React & Tailwind enthusiast 🚀",
          image: "https://randomuser.me/api/portraits/men/11.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=600&fit=crop",
          followers: 1250,
          following: 340,
          likes: 5600,
        },
        {
          name: "Priya Verma",
          bio: "UI/UX designer | Turning ideas into visuals 🎨",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&h=600&fit=crop",
          followers: 980,
          following: 210,
          likes: 4200,
        },
        {
          name: "Rohit Mehta",
          bio: "Full-stack developer | MERN | Problem solver 💻",
          image: "https://randomuser.me/api/portraits/men/13.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop",
          followers: 2100,
          following: 520,
          likes: 8900,
        },
        {
          name: "Neha Singh",
          bio: "Content creator | Travel & lifestyle ✈️",
          image: "https://randomuser.me/api/portraits/women/14.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&h=600&fit=crop",
          followers: 1500,
          following: 400,
          likes: 6100,
        },
        {
          name: "Kunal Patel",
          bio: "Startup enthusiast | Product & growth 📈",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop",
          followers: 870,
          following: 190,
          likes: 3500,
        },
        {
          name: "Ananya Iyer",
          bio: "Tech blogger | JavaScript & Web trends ✍️",
          image: "https://randomuser.me/api/portraits/women/16.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&h=600&fit=crop",
          followers: 1750,
          following: 460,
          likes: 7200,
        },
        {
          name: "Vikram Rao",
          bio: "Fitness freak | Gym • Discipline • Focus 💪",
          image: "https://randomuser.me/api/portraits/men/17.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
          followers: 1320,
          following: 310,
          likes: 4800,
        },
        {
          name: "Sneha Kulkarni",
          bio: "Digital marketer | Branding & strategy 📢",
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=600&fit=crop",
          followers: 920,
          following: 250,
          likes: 3900,
        },
        {
          name: "Aditya Joshi",
          bio: "Open-source contributor | Code & coffee ☕",
          image: "https://randomuser.me/api/portraits/men/19.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop",
          followers: 2400,
          following: 610,
          likes: 10200,
        },
        {
          name: "Pooja Malhotra",
          bio: "Photographer | Capturing moments 📸",
          image: "https://randomuser.me/api/portraits/women/20.jpg",
          backgroundImage:
            "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&h=600&fit=crop",
          followers: 1100,
          following: 280,
          likes: 4500,
        },
      ];
          
  return (
    <div className='flex flex-wrap gap-4p-10 bg-[#111]'>
        {users.map((elem) => {
            return <CardProject user={elem}/>
        })}
    </div>
  )
}

export default FollowersCard