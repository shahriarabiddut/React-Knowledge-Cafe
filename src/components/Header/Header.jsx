import profile from '../../assets/images/profile.png';

 const Header = () => {
  return (
    <section className='flex justify-between items-center p-4 border-b-2 '> 
      <h1 className='text-4xl text-purple-800 font-bold italic'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </section>
  )
}
export default Header;