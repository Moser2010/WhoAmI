using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContentfulMVC.Models.ViewModels
{
    public class AuthorAndImages
    {
        public string FullName { get; set; }
        public string Bio { get; set; }
        public string Website { get; set; }
        public List<string> Skills { get; set; }
        public string Experience { get; set; }
        public List<string> Hobbies { get; set; }
        public string Backstory { get; set; }
        public List<object> Media { get; set; } 
    }
}
