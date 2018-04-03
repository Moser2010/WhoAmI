using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContentfulMVC.Models;
using Contentful.Core.Models;
namespace ContentfulMVC.Models
{
    public class Posts
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public Asset FeaturedImage { get; set; }
        public Author Author { get; set; }
        public string PublishDate { get; set; }
        public SystemProperties sys { get; set; }
        public List<Asset> galleryOfPhotos { get; set; }
        public bool featuredPost { get; set; }
        
    }
}
