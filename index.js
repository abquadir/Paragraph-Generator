 const text =[
     `1. There are a number of reasons you may need a block of text and when you do,
      a random paragraph can be the perfect solution. If you happen to be a web designer
      and you need some random text to show in your layout, a random paragraph can be an
      excellent way to do this. If you're a programmer and you need random text to test
      the program, using these paragraphs can be the perfect way to do this. Anyone
      who's in search of realistic text for a project can use one or more of these 
      random paragraphs to fill their need.`,
      
      `2. For some writers, it isn't getting the original words on paper that's the challenge,
       but rewriting the first and second drafts. Using the random paragraph generator can
        be a good way to get into a rewriting routine before beginning the project. In this
       case, you take the random paragraph and rewrite it so it retains the same meaning,
       but does so in a better and more concise way. Beginning the day doing this with a
        random paragraph can make the rewriting of an article
      , short story, or chapter of a book much easier than trying to begin directly with it.`,
                                                                                               
      `3. When it comes to writers' block, often the most difficult part is simply beginning to
       put words to paper. One way that can often help is to write about something completely
        different from what you're having the writers' block about. This is where a random
        paragraph can be quite helpful. By using this tool you can begin to chip away at the
        writers' block by simply adding to the random paragraph that appears with the knowledge
        that it's going to be completely different from any writing you've been doing.
       Then once you begin to put words on the paper, it should be easier to transition into the
        writing that needs to get done.`,

        `4. It was Ms. Fitzhugh. She was walking fast. A strange expression crossed the faces of the
         students as they glanced toward the door and saw the principal go straight into the boys’
          restroom. The footsteps stopped. There was a deep, throaty sound difficult to describe. 
          Then came an eruption of shrill screaming and a rapid sound of heels.
         Moments later, Ms. Fitzhugh emerged, her eyes wild. Screaming, she skidded in the hall and
          headed toward the office.`,

          `5. Harper's earlier sentence generation program differed
          from other versions in its use of data on lexical cooccurrence and word behavior, both obtained from machine
          analysis of written text. These data are incorporated
          with some modifications in a new program designed to produce strings of sentences that possess the properties of
          coherence and development found in "real" discourse. (The
          actual goal is the production of isolated paragraphs, not
          an extended discourse.) In essence the program is designed
          (i) to generate an initial sentence; (ii) to "inspect"
          the result in order to determine strategies for producing
          the following sentence; `,

          `6. There are a number of reasons you may need a block of text and when you do,
          a random paragraph can be the perfect solution. If you happen to be a web designer
          and you need some random text to show in your layout, a random paragraph can be an
          excellent way to do this. If you're a programmer and you need random text to test
          the program, using these paragraphs can be the perfect way to do this. Anyone
          who's in search of realistic text for a project can use one or more of these 
          random paragraphs to fill their need.`,
          
          `7. For some writers, it isn't getting the original words on paper that's the challenge,
           but rewriting the first and second drafts. Using the random paragraph generator can
            be a good way to get into a rewriting routine before beginning the project. In this
           case, you take the random paragraph and rewrite it so it retains the same meaning,
           but does so in a better and more concise way. Beginning the day doing this with a
            random paragraph can make the rewriting of an article
          , short story, or chapter of a book much easier than trying to begin directly with it.`,
                                                                                                   
          `8. Paragraph writing examplesKnowing how to write a paragraph is incredibly important.
           It’s a basic aspect of writing, and it is something that everyone should know how to do.
            There is a specific structure that you have to follow when you’re writing a paragraph.
             This structure helps make it easier for the reader to understand what is going on.
              Through writing good paragraphs, a person canscommunicate a lot better through their writing.`,
    
            `9. There are a number of reasons you may need a block of text and when you do,
            a random paragraph can be the perfect solution. If you happen to be a web designer
            and you need some random text to show in your layout, a random paragraph can be an
            excellent way to do this. If you're a programmer and you need random text to test
            the program, using these paragraphs can be the perfect way to do this. Anyone
            who's in search of realistic text for a project can use one or more of these 
            random paragraphs to fill their need.`,
    

 ]

 const  btn = document.querySelector('.btn')
 const amount = document.getElementById("amount")
 const para = document.querySelector(".text")

 

btn.addEventListener("click", ()=>{
   const value = parseInt(amount.value)
const random = Math.floor(Math.random()* text.length)


if(isNaN(value) || value<0  || value > 9 ){

    para.innerHTML = ` <h4> If The value is less than 0 or non-empty then only one para will generate Randomly</h4> 
    
    <p class="result"> ${text[random]} </p> `
}
else{
    let tempText = text.slice(0,value)
    // console.log(tempText);
    tempText= tempText.map((item)=>{
        return `<p class="result"> ${item} </p> `
    })
    .join("")
    para.innerHTML = tempText

    
}
})   

