<script>
  // your script goes here
  export let videos;

  let watch = 0;
</script>

<div>
  {#if videos.length}
    <div>
      <div
        class="hidden lg:flex flex-col justify-center items-center border-b-2 border-gray-300 pb-16"
      >
        <iframe
          width="1000"
          height="400"
          src={videos[watch].link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div
          class="w-4/5 mx-auto flex flex-col justify-center items-center space-y-4 mt-8"
        >
          <div>
            <p class="text-center text-sm font-medium">
              Please don&apos;t just watch, open your workspace and go along
            </p>
          </div>
          <a
            href={videos[watch].channel}
            class="px-6 py-2 border border-teal-400 rounded hover:bg-teal-300 transition-colors ease-in-out"
            target="blank"
          >
            Subscribe to <span>{videos[watch].creator}</span> for more tutorials
          </a>
        </div>
      </div>
      <div
        class="lg:hidden flex flex-col justify-center items-center border-b-2 border-gray-300 pb-8 md:pb-16"
      >
        <iframe
          class="md:h-[400px]"
          width="100%"
          height="350"
          src={videos[watch].link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div
          class="md:w-4/5 md:mx-auto mx-4 flex flex-col justify-center items-center space-y-4 mt-8"
        >
          <div>
            <p class="text-center md:text-xl font-bold">
              Please don&apos;t just watch; open your workspace and go along.
            </p>
          </div>
          <a
            href={videos[watch].channel}
            class="bg-cyan-500 px-4 py-2 md:text-left text-center md:text-lg text-sm rounded-lg font-semibold text-white"
          >
            Subscribe to <span>{videos[watch].creator}</span> for more tutorials
          </a>
        </div>
      </div>
    </div>
    <section
      class="md:w-4/5 mx-auto flex flex-col lg:grid grid-cols-3 gap-4 my-8"
    >
      {#each videos as video, index}
        <button on:click={() => (watch = index)}>
          <div class="relative">
            <iframe
              class="hidden lg:block h-[200px] w-full"
              src={video.miniLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <iframe
              class="lg:hidden"
              width="100%"
              height="200"
              src={video.miniLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <div class="absolute inset-0 cursor-pointer" />
          </div>
        </button>
      {/each}
    </section>
  {:else}
    <div class="p-16 text-center text-gray-300 font-bold text-2xl">
      <p>No Data Available</p>
    </div>
  {/if}
</div>
