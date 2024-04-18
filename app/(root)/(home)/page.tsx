import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const istOffset = 330; // IST is UTC+5:30, so the offset is 330 minutes
  const localTime = now.getTime();
  const localOffset = now.getTimezoneOffset(); // Timezone offset in minutes
  
  // Calculate the IST time
  const istTime = new Date(localTime + (istOffset + localOffset) * 60 * 1000);
  
  // Format the IST time and date
  const time = istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' }).format(istTime);
  

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
