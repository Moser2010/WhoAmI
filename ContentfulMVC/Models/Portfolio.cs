using Contentful.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContentfulMVC.Models
{
    public class Portfolio
    {
        public string Name { get; set; }
        public Asset FeaturedImage { get; set; }
        public string Experience { get; set; }
        public List<string> Skills { get; set; }
        public List<Asset> PublishedProjects { get; set; }
    }
}
