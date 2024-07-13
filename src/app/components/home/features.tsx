import DashboardSvg from '~/images/Dashboard';
export default function Features() {
  return (
    <div className='w-100 h-100 font-poppins container mx-auto flex  items-center gap-20 px-10'>
      <div className='w-100 h-100 rounded-xl bg-[#EBEFFE]  pt-10'>
        <DashboardSvg />
      </div>
      <div>
        <p className='rounded-lg bg-[#E8EBEF] px-2 text-[10px] font-light tracking-widest '>
          Our Best Features 🔥
        </p>
        <div></div>
      </div>
    </div>
  );
}
