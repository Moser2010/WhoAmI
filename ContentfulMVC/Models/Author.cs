using Contentful.Core.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContentfulMVC.Models;

namespace ContentfulMVC.Models
{
   
    public class Author: MetaData
    {
        public string FullName { get; set; }
        public string Bio { get; set; }
        public string Website { get; set; }
        //public Asset Avatar { get; set; }
    }
}
