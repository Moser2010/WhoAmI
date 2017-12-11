using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContentfulMVC.Models
{
    public class MetaData
    {
        public string SiteTitle { get; set; }
        public string SubTitle { get; set; }
        //[JsonProperty("Author")]
        public Author Author { get; set; }
        //public string BackgroundImage { get; set; }
    }
}
