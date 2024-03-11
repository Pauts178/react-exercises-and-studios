export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://th.bing.com/th/id/OIP.IKQ2JZytKCgN1Zcq7C0MlwHaFl?rs=1&pid=ImgDetMain";
   let book2 = "https://i5.walmartimages.com/seo/Pre-Owned-The-Giver-Giver-Quartet-Other-0440237688-9780440237686-Lois-Lowry_ab287aec-bb85-47ab-99ea-e7a73a10b3f8.dbf067291717c41791fbb64af44f2b17.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF";
   let book3 = "https://i.ebayimg.com/images/g/q1sAAOSwb6FlVMze/s-l960.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter and the Prisoner of Azkaban!" />
         <img src={book2} alt="The Giver!" />
         <img src={book3} alt="Genesis Code!" />
      </div>      
   );
}