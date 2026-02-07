export interface Tweet {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  metrics: {
    replies: number;
    reposts: number;
    likes: number;
    views: number;
  };
  image?: string;
  pinned?: boolean;
}

export interface UserProfile {
  name: string;
  handle: string;
  verified: boolean;
  bio: string;
  location: string;
  website: string;
  born: string;
  joined: string;
  following: number;
  followers: string;
  avatar: string;
  banner: string;
}

export const USER_PROFILE: UserProfile = {
  name: "Chomper User",
  handle: "@chomper_official",
  verified: true,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #ChomperApp",
  location: "Internet, World",
  website: "chomper.app",
  born: "1990",
  joined: "March 2026",
  following: 1234,
  followers: "10.5K",
  avatar: "https://via.placeholder.com/100",
  banner: "https://via.placeholder.com/600x200",
};

export const TWEETS: Tweet[] = [
  {
    id: "1",
    pinned: true,
    user: {
      name: "Chomper User",
      handle: "@chomper_official",
      avatar: "https://via.placeholder.com/100",
    },
    content: "Pinned Tweet: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco. \n\n#LoremIpsum",
    timestamp: "28 May 26",
    metrics: {
      replies: 12,
      reposts: 55,
      likes: 232,
      views: 1200,
    },
  },
  {
    id: "2",
    user: {
      name: "Chomper User",
      handle: "@chomper_official",
      avatar: "https://via.placeholder.com/100",
    },
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    timestamp: "2h",
    metrics: {
      replies: 5,
      reposts: 12,
      likes: 89,
      views: 450,
    },
  },
  {
    id: "3",
    user: {
      name: "Chomper User",
      handle: "@chomper_official",
      avatar: "https://via.placeholder.com/100",
    },
    content: "Sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nhttps://example.com/link",
    timestamp: "5h",
    metrics: {
      replies: 2,
      reposts: 8,
      likes: 45,
      views: 210,
    },
  },
  {
    id: "4",
    user: {
      name: "Chomper User",
      handle: "@chomper_official",
      avatar: "https://via.placeholder.com/100",
    },
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    timestamp: "1d",
    metrics: {
      replies: 15,
      reposts: 42,
      likes: 560,
      views: 3100,
    },
  },
];
