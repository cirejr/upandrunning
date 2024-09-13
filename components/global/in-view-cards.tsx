import { InView } from "@/components/ui/in-view";
import GlassyCard from "./glassy-card";

export function InViewCards() {
  return (
    <div className='h-[350px] w-full overflow-y-auto overflow-x-hidden'>
      <div className='flex h-[250px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <div className='max-w-96 bg-slate-100 p-4'>
            <p className='text-zinc-600'>
              <strong className='font-medium text-zinc-900'>Athletics.</strong>{" "}
              Watch running, jumping, and throwing events. Athletes compete in
              many different activities.
            </p>
          </div>
        </InView>
      </div>
      <div className='flex h-[250px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <div className='max-w-96 bg-zinc-900 p-4'>
            <p className='text-slate-400'>
              <strong className='font-medium text-zinc-50'>Swimming.</strong>{" "}
              See swimmers race in water. They use different styles to swim fast
              and win medals.
            </p>
          </div>
        </InView>
      </div>
      <div className='flex h-[250px] items-end justify-center overflow-x-hidden px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <GlassyCard
            className='max-w-96'
            title='Gymnastics'
            description='Gymnasts perform amazing flips and jumps. They show strength and balance in their routines.'
          />
          {/* <div className='max-w-96 bg-slate-100 p-4'>
            <p className='text-zinc-600'>
              <strong className='font-medium'>Gymnastics.</strong> Gymnasts
              perform amazing flips and jumps. They show strength and balance in
              their routines.
            </p>
          </div> */}
        </InView>
      </div>
    </div>
  );
}
