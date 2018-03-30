using Contentful.Core.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContentfulMVC.Models;
using Contentful.Core.Models;

namespace ContentfulMVC.Models
{
   
    public class Author
    {
        public string FullName { get; set; }
        public string Bio { get; set; }
        public string Website { get; set; }
        public List<string> Hobbies { get; set; }
        public string Backstory { get; set; }
        public Asset Avatar { get; set; }
        public Portfolio Portfolio { get; set; }
    }
}
