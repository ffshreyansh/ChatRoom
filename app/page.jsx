import Nav from "@components/Nav";

const Home = () => (
    <>
    <Nav/>
  <section className='w-full flex-col absolute top-36'>
    <div className="mb-10">
      <h1 className="text-8xl font-medium text-center ">
      Fast, Convenient & <span className="text-primary-green">Secure</span> <br /> messaging platform!
      </h1>
      <div className="flex items-center gap-4 justify-center mt-14">
        <input type="text" name="newsletter" id="newsletter" placeholder="Subscribe to our monthly newsletter" className="w-96 h-12 text-lg font-regular px-6 py-6   rounded-full border-2 border-black" />
        <button type="button" className="rounded-full bg-black text-white py-3 px-12 font-semibold">Subscribe</button>
      </div>
    </div>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-16">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1613505305164-b6b0dae28801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1614937899505-f28f3b53fec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1528123778681-01e39b42808e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </div>
    
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1613505305164-b6b0dae28801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1614937899505-f28f3b53fec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1528123778681-01e39b42808e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
    </div>
    
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt=""/>
    </div>
    
</div>

  </section>
  </>
);

export default Home;