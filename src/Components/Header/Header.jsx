const Header = () => {
    return (
        <header className='flex justify-between items-center mx-auto p-4 border-b-2 max-w-7xl'>
            <h1 className="text-4xl font-bold">React Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
import profile from '../../assets/images/profile.png';