import { AnimatedGradientText } from './animated-gradient-text'
import { InputForm } from './input-form'
import Spotlight, { SpotlightCard } from './spotlight'

export default function ContactForm(): React.ReactElement {
  return (
    <section className="container mb-28 mt-28 ">
      <Spotlight className="w-3/4 mx-auto">
        <SpotlightCard className="rounded-md">
          <div className="relative h-full min-h-[400px] bg-background p-6 pb-8 rounded-md z-20 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -bottom-[50px] translate-y-1/2 -right-1/4 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
            >
              <div className="absolute -inset-2 [background:radial-gradient(closest-side,#b004ff,transparent)] top-0 rounded-full blur-[120px]" />
            </div>

            <div
              aria-hidden="true"
              className="absolute -top-[250px] -left-[300px] pointer-events-none w-1/2 aspect-square blur-[300px]"
            >
              <div className="absolute -inset-[2px] [background:radial-gradient(closest-side,#ff0051,transparent)] top-0 rounded-full " />
            </div>

            <div className="flex flex-col h-full relative">
              <div className="grow">
                <AnimatedGradientText className="text-5xl mb-11 font-caveat" text="Contratame!" />

                <InputForm />
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>
    </section>
  )
}
