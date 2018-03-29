using Contentful.Core.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContentfulMVC.Models;
using Contentful.Core.Models;

namespace ContentfulMVC.Models.ViewModels
{
    public class WhoIAm
    {
        public Author Author { get; set; }
        public List<Asset> Assets { get; set; }
    }
}
