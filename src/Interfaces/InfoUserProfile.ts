interface IInfoUserProfile {
    login: string;
    avatar_url: string;
    name: string | null;
    location: string | null;
    id: string | null;
    followers: string | null;
    quanty_repos: string | null;
}

export default IInfoUserProfile;